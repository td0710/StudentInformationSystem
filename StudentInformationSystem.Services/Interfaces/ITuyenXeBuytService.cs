using StudentInformationSystem.Data;

namespace StudentInformationSystem.Services.Interfaces;

public interface ITuyenXeBuytService
{
    Task<MethodResult<List<TuyenXeBuyt>>> GetAllAsync();
}