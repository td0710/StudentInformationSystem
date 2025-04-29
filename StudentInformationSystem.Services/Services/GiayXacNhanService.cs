using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using StudentInformationSystem.Data;
using StudentInformationSystem.Services.DTOs.request;

namespace StudentInformationSystem.Services.Interfaces;

public class GiayXacNhanService : IGiayXacNhanService
{
    private readonly ThongTinSinhVienDataContext _context;
    private readonly ILogger<GiayXacNhanService> _logger;

    public GiayXacNhanService(ThongTinSinhVienDataContext context, ILogger<GiayXacNhanService> logger)
    {
        _context = context;
        _logger = logger;
    }

    public async Task<MethodResult<List<GiayXacNhan>>> GetByMSVAsync(string MSV)
    {
        try
        {
            var giayXacNhan = await _context.DanhSachGiayXacNhan.Where(x => x.MaSinhVien == MSV).ToListAsync();

            return new MethodResult<List<GiayXacNhan>>
            {
                Data = giayXacNhan,
                Success = true,
            };

        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Có lỗi xảy ra khi lấy dữ liệu");
            return new MethodResult<List<GiayXacNhan>>
            {
                Success = false,
                Message = $"Lỗi khi lấy dữ liệu: {ex.Message}"
            };
        }
    }

    public async Task<MethodResult<GiayXacNhan>> CreateAsync(GiayXacNhanDto giayXacNhanDto)
    {
        try
        {
            var createGiayXacNhan = new GiayXacNhan{
                Id = Guid.NewGuid(),
                MaSinhVien = giayXacNhanDto.maSinhVien,
                LoaiGiayXN = giayXacNhanDto.loaiGiayXN,
                NgayTao = DateTime.UtcNow,
                TrangThai = VeXeBuyt.TrangThaiEnum.DangTiepNhan,
                NgayNhan = DateTime.UtcNow.AddDays(2),  
                NoiNhan = "Tầng 1 nhà T1",
                GhiChu = "Đơn đăng ký đang được tiếp nhận.",
                Huy = false,
            };
            _context.Add(createGiayXacNhan);
            await _context.SaveChangesAsync();
            return new MethodResult<GiayXacNhan>
            {
                Success = true,
                Data = createGiayXacNhan,
                Message = "Tạo GXNSV thành công"
            };
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Có lỗi xảy ra khi tạo GXNSV");
            return new MethodResult<GiayXacNhan>
            {
                Success = false,
                Message = $"Lỗi khi tạo GXNSV: {e.Message}"
            };
        }
    }
}