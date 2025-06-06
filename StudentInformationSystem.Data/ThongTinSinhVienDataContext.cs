﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace StudentInformationSystem.Data
{
    public class ThongTinSinhVienDataContext : DbContext
    {
        public DbSet<ThongTinCaNhan> DanhSachThongTinCaNhan { get; set; }
        public DbSet<TuyenXeBuyt> DanhSachTuyenXeBuyt { get; set; }
        public DbSet<VeXeBuyt> DanhSachVeXeBuyt { get; set; }
        public DbSet<LoaiGiayXacNhan> DanhSachLoaiGiayXacNhan { get; set; }
        public DbSet<GiayXacNhan> DanhSachGiayXacNhan { get; set; }

        public ThongTinSinhVienDataContext(DbContextOptions<ThongTinSinhVienDataContext> options) : base(options)
        {
        }
        
    }
}
