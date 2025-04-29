using StudentInformationSystem.Data;

namespace StudentInformationSystem.Services.Interfaces;

public interface ILoaiGiayXacNhanService
{
    Task<MethodResult<List<LoaiGiayXacNhan>>> GetAsync(); 
}