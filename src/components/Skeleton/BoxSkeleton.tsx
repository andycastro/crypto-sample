import { Skeleton } from "@/components/ui/skeleton";

export function BoxSkeleton() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="font-semibold leading-none tracking-tight">
          <Skeleton className="h-6 w-48" />
        </div>
      </div>
      <div className="p-6 pt-0">
        <div id="chart">
          <div style={{ minHeight: "365px" }}>
            <Skeleton className="h-96 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
