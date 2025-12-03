using DotNet_Starter_Template.Models.Common;
using DotNet_Starter_Template.Models.DTOs.Orders;
using DotNet_Starter_Template.Models.ViewModels.Orders;
using DotNet_Starter_Template.Models.ViewModels.Tickets;

namespace DotNet_Starter_Template.Services.Interfaces
{
    public interface IOrderService
    {
        Task<ApiResponse<OrderResponseViewModel>> PlaceOrderAsync(PlaceOrderDto placeOrderDto);
        Task<ApiResponse<PagedResult<TicketListViewModel>>> GetAllTicketsAsync(PaginationRequest request);
        Task<ApiResponse<PagedResult<TicketListViewModel>>> GetOpenTicketsAsync(PaginationRequest request);
        Task<ApiResponse<PagedResult<TicketListViewModel>>> GetTicketsByStatusAsync(bool isClosed, PaginationRequest request);
        Task<ApiResponse<TicketDetailViewModel?>> GetTicketByIdAsync(int id);
        Task<ApiResponse<PagedResult<OrderListViewModel>>> GetAllOrdersAsync(PaginationRequest request);
    }
}

