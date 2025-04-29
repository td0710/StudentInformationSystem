using Microsoft.AspNetCore.Mvc;
using StudentInformationSystem.Data;
using StudentInformationSystem.Services;
using StudentInformationSystem.Services.DTOs.request;
using StudentInformationSystem.Services.Interfaces;

namespace StudentInformationSystem.Controllers;

[Route("api/[controller]")]
[ApiController]
public class GiayXacNhanController
{
    private readonly IGiayXacNhanService _giayXacNhanService;

    public GiayXacNhanController(IGiayXacNhanService giayXacNhanService)
    {
        _giayXacNhanService = giayXacNhanService; 
    }
    
    [HttpGet("get")]
    public Task<MethodResult<List<GiayXacNhan>>> GetByMSV(string MSV)
    {
        return _giayXacNhanService.GetByMSVAsync(MSV);
    }

    [HttpPost("create")]
    public Task<MethodResult<GiayXacNhan>> CreateAsync([FromBody] GiayXacNhanDto giayXacNhanDto)
    {
        return _giayXacNhanService.CreateAsync(giayXacNhanDto);
    }
}