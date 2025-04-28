using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using StudentInformationSystem.Data;
using StudentInformationSystem.Services.Interfaces;

namespace StudentInformationSystem.Services.Services;

public class TuyenXeBuytService : ITuyenXeBuytService
{
    private readonly ThongTinSinhVienDataContext _context;
    private readonly ILogger<TuyenXeBuytService> _logger;

    public TuyenXeBuytService(ThongTinSinhVienDataContext context, ILogger<TuyenXeBuytService> logger)
    {
        _context = context;
        _logger = logger;
    }

    public async Task<MethodResult<List<TuyenXeBuyt>>> GetAllAsync()
    {
        try
        {
            var danhSachTuyenXeBuyt = await _context.DanhSachTuyenXeBuyt.ToListAsync();
            return new MethodResult<List<TuyenXeBuyt>>
            {
                Success = true,
                Data = danhSachTuyenXeBuyt
            };
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Có lỗi xảy ra khi lấy dữ liệu");
            return new MethodResult<List<TuyenXeBuyt>>
            {
                Success = false,
                Message = $"Lỗi khi lấy dữ liệu: {ex.Message}"
            };
        }
    }
}