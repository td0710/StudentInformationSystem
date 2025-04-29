using System.ComponentModel.DataAnnotations.Schema;

namespace StudentInformationSystem.Data;

[Table("LoaiGiayXacNhan")]
public class LoaiGiayXacNhan
{
    public int id { get; set; }
    public string TenGiayXacNhan { get; set; }
}