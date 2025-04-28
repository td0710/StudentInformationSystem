using Microsoft.Extensions.Logging;
using StudentInformationSystem.Data;
using StudentInformationSystem.Services.DTOs.request;
using StudentInformationSystem.Services.Interfaces;

namespace StudentInformationSystem.Services.Services;

public class VeXeBuytService : IVeXeBuytService
{
    private readonly ThongTinSinhVienDataContext _context;
    private readonly ILogger<VeXeBuytService> _logger;

    public VeXeBuytService(ThongTinSinhVienDataContext context, ILogger<VeXeBuytService> logger)
    {
        _context = context;
        _logger = logger;
    }
    public async Task<MethodResult<List<VeXeBuyt>>> GetByIdAsync(string maSinhVien)
    {
        try
        {
            var listVeXeBuytByMSV = _context.DanhSachVeXeBuyt.Where(x => x.MaSinhVien == maSinhVien).ToList();
            return new MethodResult<List<VeXeBuyt>>
            {
                Success = true,
                Data = listVeXeBuytByMSV,
            };
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Có lỗi xảy ra khi lấy dữ liệu");
            return new MethodResult<List<VeXeBuyt>>
            {
                Success = false,
                Message = $"Lỗi khi lấy dữ liệu: {e.Message}"
            };
        }
    }

    public async Task<MethodResult<VeXeBuyt>> CreateVeXeBuytAsync(VeXeBuytDto veXeBuytDto)
    {
        try
        {

            var createVeXeBuyt = new VeXeBuyt
            {
                Id = Guid.NewGuid(),
                MaSinhVien = veXeBuytDto.maSinhVien,
                LoaiThe = veXeBuytDto.loaiThe == 1 ? (VeXeBuyt.LoaiTheEnum.MotTuyen) : (VeXeBuyt.LoaiTheEnum.LienTuyen),
                SDT = veXeBuytDto.SDT,
                AnhThe = veXeBuytDto.anh,
                NgayTao = DateTime.UtcNow,
                TrangThai = VeXeBuyt.TrangThaiEnum.DangTiepNhan,
                NgayNhan = null,
                NoiNhan = "Tầng 1 nhà T1.",
                GhiChu = "",
                Huy = false
            };
            _context.Add(createVeXeBuyt);
            await _context.SaveChangesAsync();
            return new MethodResult<VeXeBuyt>
            {
                Success = true,
                Data = createVeXeBuyt,
                Message = "Tạo vé xe thành công"
            };
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Có lỗi xảy ra khi tạo vé xe buýt");
            return new MethodResult<VeXeBuyt>
            {
                Success = false,
                Message = $"Lỗi khi tạo vé xe buýt: {e.Message}"
            };
        }
    }

}