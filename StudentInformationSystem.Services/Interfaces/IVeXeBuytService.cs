using StudentInformationSystem.Data;
using StudentInformationSystem.Services.DTOs.request;

namespace StudentInformationSystem.Services.Interfaces;

public interface IVeXeBuytService
{
    Task<MethodResult<List<VeXeBuyt>>> GetByIdAsync(string maSinhVien);
    Task<MethodResult<VeXeBuyt>> CreateVeXeBuytAsync(VeXeBuytDto veXeBuytDto);
}