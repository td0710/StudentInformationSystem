using System.ComponentModel.DataAnnotations.Schema;

namespace StudentInformationSystem.Data;
[Table("TuyenXeBuyt")]
public class TuyenXeBuyt
{
    public Guid Id { get; set; }

    public string MaTuyen { get; set; }

    public string Ten { get; set; }
}