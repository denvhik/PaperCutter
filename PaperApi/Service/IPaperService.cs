using PaperApi.Model;

namespace PaperApi.Service
{
    public interface IPaperService
    {
        int CountParts(int M,int N, Cell[][] grid);
    }
}
