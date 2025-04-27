using System.Text.Json.Serialization;

namespace StudentInformationSystem.Services
{

    public class MethodResult
    {
        public bool Success { get; set; }
        [JsonIgnore]
        public Exception Exception { get; set; }
        public string Message { get; set; }
    }

    public class MethodResult<TModel> : MethodResult
    {
        public TModel Data { get; set; }
    }
    public class PagedMethodResult<TModel> : MethodResult<TModel>
    {
        public int Total { get; set; }
    }
}