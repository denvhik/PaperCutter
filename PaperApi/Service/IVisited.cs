using PaperApi.Model;

namespace PaperApi.Service
{
    public interface IVisited
    {
        void Visit(int M, int N, Cell[][] grid, int i, int j, int group);
    }
}
