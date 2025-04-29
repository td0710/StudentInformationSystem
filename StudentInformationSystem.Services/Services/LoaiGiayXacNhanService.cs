using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using StudentInformationSystem.Data;
using StudentInformationSystem.Services.Interfaces;

namespace StudentInformationSystem.Services.Services;

public class LoaiGiayXacNhanService : ILoaiGiayXacNhanService
{   
    
    private readonly ThongTinSinhVienDataContext _context;
    private readonly ILogger<LoaiGiayXacNhanService> _logger;

    public LoaiGiayXacNhanService(ThongTinSinhVienDataContext context, ILogger<LoaiGiayXacNhanService> logger)
    {
        _context = context;
        _logger = logger;
    }
    
    
    public async Task<MethodResult<List<LoaiGiayXacNhan>>> GetAsync()
    {
        try
        {
            var loaiGiayXacNhan = await _context.DanhSachLoaiGiayXacNhan.ToListAsync();
            return new MethodResult<List<LoaiGiayXacNhan>>
            {
                Success = true,
                Data = loaiGiayXacNhan,
            };
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Có lỗi xảy ra khi lấy dữ liệu");
            return new MethodResult<List<LoaiGiayXacNhan>>
            {
                Success = false,
                Message = $"Lỗi khi lấy dữ liệu: {ex.Message}"
            }; 
        }
    }

}