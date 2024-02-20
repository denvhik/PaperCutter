using Microsoft.AspNetCore.Mvc;
using PaperApi.Model;
using PaperApi.Service;

namespace PaperApi.Controllers
{
    [ApiController]
    public class PaperController : ControllerBase
    {
        private readonly IPaperService _paperService;
        public PaperController(IPaperService paperService)
        {
            _paperService=paperService;
        }

        [HttpPost("PaperCutter")]
        public async Task<int> PaperCutter([FromBody ]GridModel model) 
        {
             var piece =  _paperService.CountParts(model.M, model.N, model.Grid);
             return piece;
        }
    }
}
