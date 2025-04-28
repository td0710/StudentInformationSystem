using Microsoft.AspNetCore.Mvc;
using StudentInformationSystem.Data;
using StudentInformationSystem.Services;
using StudentInformationSystem.Services.Interfaces;

namespace StudentInformationSystem.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TuyenXeBuytController
{
    private readonly ThongTinSinhVienDataContext _context;
    private readonly ITuyenXeBuytService _tuyenXeBuytService;

    public TuyenXeBuytController(ThongTinSinhVienDataContext context, ITuyenXeBuytService tuyenXeBuytService)
    {
        _context = context;
        _tuyenXeBuytService = tuyenXeBuytService;
    }


    [HttpGet("get-all")]
    public Task<MethodResult<List<TuyenXeBuyt>>> GetAllAsync()
    {
        return _tuyenXeBuytService.GetAllAsync(); 
    }
}