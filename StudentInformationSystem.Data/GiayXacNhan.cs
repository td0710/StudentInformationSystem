using System.ComponentModel.DataAnnotations.Schema;

namespace StudentInformationSystem.Data;

[Table("GiayXacNhan")]
public class GiayXacNhan
{
    public Guid Id { get; set; }
    public string MaSinhVien { get; set; }
    public int LoaiGiayXN { get; set; }
    public DateTime NgayTao { get; set; }
    public VeXeBuyt.TrangThaiEnum TrangThai { get; set; }
    public DateTime NgayNhan { get; set; }
    public string? NoiNhan { get; set; }
    public string? GhiChu { get; set; }
    public bool? Huy { get; set; }

}