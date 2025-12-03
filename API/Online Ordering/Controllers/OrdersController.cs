using Microsoft.AspNetCore.Mvc;
using DotNet_Starter_Template.Models.DTOs.Orders;
using DotNet_Starter_Template.Models.ViewModels.Orders;
using DotNet_Starter_Template.Models.ViewModels.Tickets;
using DotNet_Starter_Template.Models.Common;
using DotNet_Starter_Template.Services.Interfaces;

namespace DotNet_Starter_Template.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly IOrderService _orderService;
        private readonly ILogger<OrdersController> _logger;

        public OrdersController(IOrderService orderService, ILogger<OrdersController> logger)
        {
            _orderService = orderService;
            _logger = logger;
        }

        [HttpPost("place")]
        public async Task<ActionResult<ApiResponse<OrderResponseViewModel>>> PlaceOrder(PlaceOrderDto placeOrderDto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    var errors = ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage)).ToList();
                    return BadRequest(ApiResponse<OrderResponseViewModel>.ErrorResult("Validation failed", errors));
                }

                var result = await _orderService.PlaceOrderAsync(placeOrderDto);
                
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return CreatedAtAction(nameof(PlaceOrder), new { ticketId = result.Data!.TicketId }, result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error placing order");
                return StatusCode(500, ApiResponse<OrderResponseViewModel>.ErrorResult("An error occurred while placing the order"));
            }
        }

        [HttpGet("tickets")]
        public async Task<ActionResult<ApiResponse<PagedResult<TicketListViewModel>>>> GetAllTickets([FromQuery] PaginationRequest request)
        {
            try
            {
                var result = await _orderService.GetAllTicketsAsync(request);
                
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting all tickets");
                return StatusCode(500, ApiResponse<PagedResult<TicketListViewModel>>.ErrorResult("An error occurred while retrieving tickets"));
            }
        }

        [HttpGet("tickets/open")]
        public async Task<ActionResult<ApiResponse<PagedResult<TicketListViewModel>>>> GetOpenTickets([FromQuery] PaginationRequest request)
        {
            try
            {
                var result = await _orderService.GetOpenTicketsAsync(request);
                
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting open tickets");
                return StatusCode(500, ApiResponse<PagedResult<TicketListViewModel>>.ErrorResult("An error occurred while retrieving open tickets"));
            }
        }

        [HttpGet("tickets/status/{isClosed}")]
        public async Task<ActionResult<ApiResponse<PagedResult<TicketListViewModel>>>> GetTicketsByStatus(bool isClosed, [FromQuery] PaginationRequest request)
        {
            try
            {
                var result = await _orderService.GetTicketsByStatusAsync(isClosed, request);
                
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting tickets by status");
                return StatusCode(500, ApiResponse<PagedResult<TicketListViewModel>>.ErrorResult("An error occurred while retrieving tickets by status"));
            }
        }

        [HttpGet("tickets/{id}")]
        public async Task<ActionResult<ApiResponse<TicketDetailViewModel?>>> GetTicketById(int id)
        {
            try
            {
                var result = await _orderService.GetTicketByIdAsync(id);
                
                if (!result.Success)
                {
                    return NotFound(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting ticket by id");
                return StatusCode(500, ApiResponse<TicketDetailViewModel?>.ErrorResult("An error occurred while retrieving the ticket"));
            }
        }

        [HttpGet("all")]
        public async Task<ActionResult<ApiResponse<PagedResult<OrderListViewModel>>>> GetAllOrders([FromQuery] PaginationRequest request)
        {
            try
            {
                var result = await _orderService.GetAllOrdersAsync(request);
                
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting all orders");
                return StatusCode(500, ApiResponse<PagedResult<OrderListViewModel>>.ErrorResult("An error occurred while retrieving orders"));
            }
        }
    }
}

