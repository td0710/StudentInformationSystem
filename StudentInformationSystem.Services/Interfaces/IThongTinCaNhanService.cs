using StudentInformationSystem.Data;

namespace StudentInformationSystem.Services.Interfaces
{

    public interface IThongTinCaNhanService
    {
        Task<MethodResult<ThongTinCaNhan>> SingleAsync(Guid id);
        Task<MethodResult<ThongTinCaNhan>> UpdateAsync(ThongTinCaNhan thongTinCaNhan);
    }
}