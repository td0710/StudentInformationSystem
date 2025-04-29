using Microsoft.AspNetCore.Mvc;
using StudentInformationSystem.Data;
using StudentInformationSystem.Services;
using StudentInformationSystem.Services.Interfaces;

namespace StudentInformationSystem.Controllers;


[Route("api/[controller]")]
[ApiController]
public class LoaiGiayXacNhanController
{
    
    private readonly ILoaiGiayXacNhanService _loaiGiayXacNhanService;

    public LoaiGiayXacNhanController(ILoaiGiayXacNhanService veXeBuytService)
    {
        _loaiGiayXacNhanService = veXeBuytService;
    }

    [HttpGet("get")]
    public Task<MethodResult<List<LoaiGiayXacNhan>>> Get()
    {
        return _loaiGiayXacNhanService.GetAsync();
    }
}