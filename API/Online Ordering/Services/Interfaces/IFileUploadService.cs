using Microsoft.AspNetCore.Http;

namespace DotNet_Starter_Template.Services.Interfaces
{
    public interface IFileUploadService
    {
        Task<string> UploadImageAsync(IFormFile file, string folderName);
        Task<bool> DeleteImageAsync(string imageUrl);
        string GetImageUrl(string fileName, string folderName);
    }
}

