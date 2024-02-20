using PaperApi.Model;

namespace PaperApi.Service
{
    public class PaperService :IPaperService,IVisited
    {
        public int CountParts(int M, int N, Cell[][] grid)
        {
            int group = 0;
            for (int i = 0; i < M; i++)
            {
                for (int j = 0; j < N; j++)
                {
                    if (grid[i][j].IsCut == 0 && grid[i][j].IsVisited == 0)
                    {
                        group++;
                        Visit(M, N, grid, i, j, group);
                    }
                }
            }
            return group;
        }
        public void Visit(int M,int N,Cell[][] grid, int i, int j, int group)
        {
            if (i < 0 || j < 0 || i >= grid.GetLength(0) || j >= grid[0].GetLength(0) || grid[i][j].IsCut == 1 || grid[i][j].IsVisited == 1)
            {
                return;
            }

            grid[i][j].IsVisited = 1;
            grid[i][j].Group = group;

            Visit(M,N,grid, i + 1, j, group);
            Visit(M, N, grid, i - 1, j, group);
            Visit(M, N, grid, i, j + 1, group);
            Visit(M, N, grid, i, j - 1, group);
        }
    }

   
}
