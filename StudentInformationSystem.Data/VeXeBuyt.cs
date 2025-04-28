using System.ComponentModel.DataAnnotations.Schema;

namespace StudentInformationSystem.Data;

[Table("VeXeBuyt")]
public class VeXeBuyt
{
    public enum TrangThaiEnum
    {
        DangTiepNhan = 1,
        HoanThanh,
        TuChoi,
        DaTiepNhan
    }
    public enum LoaiTheEnum
    {
        MotTuyen = 1,
        LienTuyen
    }
    public Guid Id { get; set; }
    public string MaSinhVien { get; set; }
    public LoaiTheEnum LoaiThe { get; set; }
    public string? SDT { get; set; }
    public string? AnhThe { get; set; }
    public DateTime NgayTao { get; set; }
    public TrangThaiEnum TrangThai { get; set; }
    public DateTime? NgayNhan { get; set; }
    public string? NoiNhan { get; set; }
    public string? GhiChu { get; set; }
    public bool? Huy { get; set; }
    
}