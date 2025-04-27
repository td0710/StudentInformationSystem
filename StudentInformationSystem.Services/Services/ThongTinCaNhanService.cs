using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using StudentInformationSystem.Data;
using StudentInformationSystem.Services.Interfaces;

namespace StudentInformationSystem.Services.Services
{
    public class ThongTinCaNhanService : IThongTinCaNhanService
    {
        private readonly ThongTinSinhVienDataContext _context;
        private readonly ILogger<ThongTinCaNhanService> _logger;

        public ThongTinCaNhanService(ThongTinSinhVienDataContext context, ILogger<ThongTinCaNhanService> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<MethodResult<ThongTinCaNhan>> SingleAsync(Guid id)
        {
            try
            {
                var thongTinSinhVienResult =
                    await _context.DanhSachThongTinCaNhan.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
                return new MethodResult<ThongTinCaNhan>
                {
                    Success = true,
                    Data = thongTinSinhVienResult
                };
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Có lỗi xảy ra khi lấy dữ liệu");
                return new MethodResult<ThongTinCaNhan>
                {
                    Success = false,
                    Message = "Máy chủ đang bận, xin vui long thử lại sau"
                };
            }
        }

 public async Task<MethodResult<ThongTinCaNhan>> UpdateAsync(ThongTinCaNhan thongTinCaNhan)
{
    try
    {
        var existingEntity = await _context.DanhSachThongTinCaNhan.FirstOrDefaultAsync(x => x.Id == thongTinCaNhan.Id);

        if (existingEntity == null)
        {
            return new MethodResult<ThongTinCaNhan>
            {
                Success = false,
                Message = "Không tìm thấy thông tin sinh viên cần cập nhật"
            };
        }

        existingEntity.HoTen = thongTinCaNhan.HoTen;
        existingEntity.MaSinhVien = thongTinCaNhan.MaSinhVien;
        existingEntity.Khoa = thongTinCaNhan.Khoa;
        existingEntity.DanToc = thongTinCaNhan.DanToc;
        existingEntity.TonGiao = thongTinCaNhan.TonGiao;
        existingEntity.QuocTich = thongTinCaNhan.QuocTich;
        existingEntity.CCCD = thongTinCaNhan.CCCD;
        existingEntity.CCCDNgayCap = thongTinCaNhan.CCCDNgayCap;
        existingEntity.CCCDNoiCap = thongTinCaNhan.CCCDNoiCap;
        existingEntity.NgaySinh = thongTinCaNhan.NgaySinh;
        existingEntity.NoiSinh = thongTinCaNhan.NoiSinh;
        existingEntity.GioiTinh = thongTinCaNhan.GioiTinh;
        existingEntity.QueQuan = thongTinCaNhan.QueQuan;
        existingEntity.SDT = thongTinCaNhan.SDT;
        existingEntity.Email = thongTinCaNhan.Email;
        existingEntity.HoKhauTP = thongTinCaNhan.HoKhauTP;
        existingEntity.HoKhauHuyen = thongTinCaNhan.HoKhauHuyen;
        existingEntity.HoKhauXa = thongTinCaNhan.HoKhauXa;
        existingEntity.DiaChiBaoTin = thongTinCaNhan.DiaChiBaoTin;
        existingEntity.SDTGiaDinh = thongTinCaNhan.SDTGiaDinh;
        existingEntity.Lop = thongTinCaNhan.Lop;
        existingEntity.CCCDGiamHo = thongTinCaNhan.CCCDGiamHo;
        existingEntity.MaBHYT = thongTinCaNhan.MaBHYT;
        existingEntity.MaBHXH = thongTinCaNhan.MaBHXH;
        existingEntity.TenBo = thongTinCaNhan.TenBo;
        existingEntity.NamSinhBo = thongTinCaNhan.NamSinhBo;
        existingEntity.NgheNghiepBo = thongTinCaNhan.NgheNghiepBo;
        existingEntity.NoiLamViecBo = thongTinCaNhan.NoiLamViecBo;
        existingEntity.SDTBo = thongTinCaNhan.SDTBo;
        existingEntity.TenMe = thongTinCaNhan.TenMe;
        existingEntity.NamSinhMe = thongTinCaNhan.NamSinhMe;
        existingEntity.NgheNghiepMe = thongTinCaNhan.NgheNghiepMe;
        existingEntity.NoiLamViecMe = thongTinCaNhan.NoiLamViecMe;
        existingEntity.SDTMe = thongTinCaNhan.SDTMe;

        await _context.SaveChangesAsync();

        return new MethodResult<ThongTinCaNhan>
        {
            Success = true,
            Message = "Cập nhật thông tin cá nhân thành công",
            Data = existingEntity
        };
    }
    catch (Exception ex)
    {
        _logger.LogError(ex, "Có lỗi xảy ra khi cập nhật thông tin cá nhân");
        return new MethodResult<ThongTinCaNhan>
        {
            Success = false,
            Message = "Máy chủ đang bận, xin vui lòng thử lại sau"
        };
    }
}

    }
}
