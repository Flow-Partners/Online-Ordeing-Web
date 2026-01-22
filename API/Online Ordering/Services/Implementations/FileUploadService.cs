using DotNet_Starter_Template.Services.Interfaces;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Processing;
using SixLabors.ImageSharp.Formats.Jpeg;

namespace DotNet_Starter_Template.Services.Implementations
{
    public class FileUploadService : IFileUploadService
    {
        private readonly IWebHostEnvironment _environment;
        private readonly ILogger<FileUploadService> _logger;
        private const string BaseUrl = "/images";
        
        // Image compression settings
        private const int MaxWidth = 1920;
        private const int MaxHeight = 1920;
        private const int JpegQuality = 85;

        public FileUploadService(IWebHostEnvironment environment, ILogger<FileUploadService> logger)
        {
            _environment = environment;
            _logger = logger;
        }

        public async Task<string> UploadImageAsync(IFormFile file, string folderName)
        {
            if (file == null || file.Length == 0)
                throw new ArgumentException("File is empty");

            // Validate file type
            var allowedExtensions = new[] { ".jpg", ".jpeg", ".png", ".gif", ".webp" };
            var fileExtension = Path.GetExtension(file.FileName).ToLowerInvariant();
            
            if (!allowedExtensions.Contains(fileExtension))
                throw new ArgumentException($"File type {fileExtension} is not allowed. Allowed types: {string.Join(", ", allowedExtensions)}");

            // Validate file size (max 5MB)
            const long maxFileSize = 5 * 1024 * 1024; // 5MB
            if (file.Length > maxFileSize)
                throw new ArgumentException($"File size exceeds maximum allowed size of 5MB");

            // Create folder structure: wwwroot/images/{folderName}/
            var webRootPath = _environment.WebRootPath;
            if (string.IsNullOrEmpty(webRootPath))
            {
                webRootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
            }

            var uploadsFolder = Path.Combine(webRootPath, "images", folderName);
            if (!Directory.Exists(uploadsFolder))
            {
                Directory.CreateDirectory(uploadsFolder);
            }

            // Generate unique filename - always use .jpg for compressed images
            var uniqueFileName = $"{Guid.NewGuid()}.jpg";
            var filePath = Path.Combine(uploadsFolder, uniqueFileName);

            try
            {
                // Compress and resize image
                using (var imageStream = file.OpenReadStream())
                using (var image = await Image.LoadAsync(imageStream))
                {
                    var originalWidth = image.Width;
                    var originalHeight = image.Height;
                    
                    // Calculate new dimensions while maintaining aspect ratio
                    var (newWidth, newHeight) = CalculateDimensions(originalWidth, originalHeight, MaxWidth, MaxHeight);
                    
                    // Resize if needed
                    if (originalWidth > MaxWidth || originalHeight > MaxHeight)
                    {
                        image.Mutate(x => x.Resize(new ResizeOptions
                        {
                            Size = new Size(newWidth, newHeight),
                            Mode = ResizeMode.Max,
                            Sampler = KnownResamplers.Lanczos3
                        }));
                        _logger.LogInformation("Image resized from {OriginalWidth}x{OriginalHeight} to {NewWidth}x{NewHeight}", 
                            originalWidth, originalHeight, newWidth, newHeight);
                    }

                    // Save compressed image as JPEG
                    var encoder = new JpegEncoder
                    {
                        Quality = JpegQuality
                    };

                    await image.SaveAsync(filePath, encoder);
                    
                    var fileInfo = new FileInfo(filePath);
                    _logger.LogInformation("Image compressed and saved: {ImageUrl}, Original size: {OriginalSize}KB, Compressed size: {CompressedSize}KB", 
                        $"{BaseUrl}/{folderName}/{uniqueFileName}", 
                        file.Length / 1024, 
                        fileInfo.Length / 1024);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error processing image: {FileName}", file.FileName);
                throw new ArgumentException($"Failed to process image: {ex.Message}");
            }

            // Return URL path (relative to wwwroot)
            var imageUrl = $"{BaseUrl}/{folderName}/{uniqueFileName}";
            _logger.LogInformation("Image uploaded successfully: {ImageUrl}", imageUrl);
            
            return imageUrl;
        }

        public Task<bool> DeleteImageAsync(string imageUrl)
        {
            if (string.IsNullOrWhiteSpace(imageUrl))
                return Task.FromResult(false);

            try
            {
                // Remove leading slash if present and convert URL to file path
                var relativePath = imageUrl.TrimStart('/');
                var webRootPath = _environment.WebRootPath;
                if (string.IsNullOrEmpty(webRootPath))
                {
                    webRootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
                }
                var filePath = Path.Combine(webRootPath, relativePath);

                if (File.Exists(filePath))
                {
                    File.Delete(filePath);
                    _logger.LogInformation("Image deleted successfully: {ImageUrl}", imageUrl);
                    return Task.FromResult(true);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting image: {ImageUrl}", imageUrl);
            }

            return Task.FromResult(false);
        }

        public string GetImageUrl(string fileName, string folderName)
        {
            return $"{BaseUrl}/{folderName}/{fileName}";
        }

        private (int width, int height) CalculateDimensions(int originalWidth, int originalHeight, int maxWidth, int maxHeight)
        {
            // If image is smaller than max dimensions, return original
            if (originalWidth <= maxWidth && originalHeight <= maxHeight)
            {
                return (originalWidth, originalHeight);
            }

            // Calculate scaling factor
            var widthRatio = (double)maxWidth / originalWidth;
            var heightRatio = (double)maxHeight / originalHeight;
            var ratio = Math.Min(widthRatio, heightRatio);

            return ((int)(originalWidth * ratio), (int)(originalHeight * ratio));
        }
    }
}

