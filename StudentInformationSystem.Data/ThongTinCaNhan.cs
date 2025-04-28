using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;


namespace StudentInformationSystem.Data
{
    [Table("ThongTinCaNhan")]
    public class ThongTinCaNhan
    {
        public Guid Id { get; set; } //
        public string HoTen { get; set; }//
        public string MaSinhVien { get; set; }//
        public string? Khoa { get; set; }//
        public string? DanToc { get; set; }//
        public string? TonGiao { get; set; }//
        public string? QuocTich { get; set; }//
        [JsonPropertyName("cCCD")]
        public string? CCCD { get; set; }//
        public string? CCCDNgayCap { get; set; }//
        public string? CCCDNoiCap { get; set; }//
        public string? NgaySinh { get; set; }//
        public string? NoiSinh { get; set; }//
        public bool? GioiTinh { get; set; }//
        public string? QueQuan { get; set; }//
        public string? SDT { get; set; }//
        public string? Email { get; set; }//
        public string? HoKhauTP { get; set; }//
        public string? HoKhauHuyen { get; set; }//
        public string? HoKhauXa { get; set; }//
        public string? DiaChiBaoTin { get; set; }//
        public string? SDTGiaDinh { get; set; }//
        public string? Lop { get; set; }//
        [JsonPropertyName("cCCDGiamHo")]
        public string? CCCDGiamHo { get; set; }//
        public string? MaBHYT { get; set; }//
        public string? MaBHXH { get; set; }//
        public string? TenBo { get; set; }//
        public string? NamSinhBo { get; set; }
        public string? NgheNghiepBo { get; set; }
        public string? NoiLamViecBo { get; set; }
        [JsonPropertyName("sDTBo")]
        public string? SDTBo { get; set; }
        public string? TenMe { get; set; }
        public string? NamSinhMe { get; set; }
        public string? NgheNghiepMe { get; set; }
        public string? NoiLamViecMe { get; set; }
        [JsonPropertyName("sDTMe")]
        public string? SDTMe { get; set; }
    }
}