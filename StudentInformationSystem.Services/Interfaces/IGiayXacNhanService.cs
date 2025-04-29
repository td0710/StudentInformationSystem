using StudentInformationSystem.Data;
using StudentInformationSystem.Services.DTOs.request;

namespace StudentInformationSystem.Services.Interfaces;

public interface IGiayXacNhanService
{
    Task<MethodResult<List<GiayXacNhan>>> GetByMSVAsync(string MSV);
    Task<MethodResult<GiayXacNhan>> CreateAsync(GiayXacNhanDto giayXacNhanDto);
}