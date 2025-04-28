using Microsoft.AspNetCore.Mvc;
using StudentInformationSystem.Data;
using StudentInformationSystem.Services;
using StudentInformationSystem.Services.DTOs.request;
using StudentInformationSystem.Services.Interfaces;
using StudentInformationSystem.Services.Services;

namespace StudentInformationSystem.Controllers;

[Route("api/[controller]")]
[ApiController]
public class VeXeBuytController
{
    private readonly ThongTinSinhVienDataContext _context;
    private readonly IVeXeBuytService _veXeBuytService;

    public VeXeBuytController(ThongTinSinhVienDataContext context, IVeXeBuytService veXeBuytService)
    {
        _context = context;
        _veXeBuytService = veXeBuytService;
    }

    [HttpGet("get-by-msv")]
    public Task<MethodResult<List<VeXeBuyt>>> GetVeXeBuytByMSV(string maSinhVien)
    {
        return _veXeBuytService.GetByIdAsync(maSinhVien);
    }
    
    [HttpPost("create")]
    public Task<MethodResult<VeXeBuyt>> CreateVeXeBuyt([FromBody]VeXeBuytDto veXeBuytDto)
    {
        return _veXeBuytService.CreateVeXeBuytAsync(veXeBuytDto);
    }
}