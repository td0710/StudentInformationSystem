

using Microsoft.AspNetCore.Mvc;
using StudentInformationSystem.Data;
using StudentInformationSystem.Services;
using StudentInformationSystem.Services.Interfaces;

namespace StudentInformationSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ThongTinCaNhanController
    {
        private readonly ThongTinSinhVienDataContext _context;
        private readonly IThongTinCaNhanService _thongTinCaNhanService;

        public ThongTinCaNhanController(ThongTinSinhVienDataContext context,IThongTinCaNhanService thongTinCaNhanService)
        {
            
            _context = context;
            _thongTinCaNhanService = thongTinCaNhanService;
        }
        [HttpGet("get-by-code")]
        public Task<MethodResult<ThongTinCaNhan>> SingleByCodeAsync(Guid code)
        {
            return _thongTinCaNhanService.SingleAsync(code);
        }

        [HttpPut("update")]
        public Task<MethodResult<ThongTinCaNhan>> UpdateAsync([FromBody] ThongTinCaNhan thongTinCaNhan)
        {
            return _thongTinCaNhanService.UpdateAsync(thongTinCaNhan);
        }
        
    }
}