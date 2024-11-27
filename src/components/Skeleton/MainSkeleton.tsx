import { Skeleton } from "@/components/ui/skeleton";

export function MainSkeleton() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="flex h-16 w-full shrink-0 items-center gap-2 border-b px-3">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-32" />
            <div
              data-orientation="vertical"
              role="none"
              className="shrink-0 bg-border w-[1px] mr-2 h-4"
            ></div>
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </header>
      <main className="flex-grow p-4 w-full">
        <div className="py-6">
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-6 w-64" />
          <div className="py-6">
            <div className="w-full flex justify-end space-x-5">
              <Skeleton className="h-9 w-full max-w-[250px]" />
              <Skeleton className="h-9 w-full max-w-[250px]" />
              <Skeleton className="h-9 w-full max-w-[250px]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="flex flex-col space-y-1.5 p-6">
                  <Skeleton className="h-6 w-48" />
                </div>
                <div className="p-6 pt-0">
                  <div style={{ minHeight: "301.957px" }}>
                    <Skeleton className="h-96 w-full" />
                  </div>
                </div>
              </div>
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="flex flex-col space-y-1.5 p-6">
                  <Skeleton className="h-6 w-48" />
                </div>
                <div className="p-6 pt-0">
                  <div style={{ minHeight: "301.957px" }}>
                    <Skeleton className="h-96 w-full" />
                  </div>
                </div>
              </div>
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="flex flex-col space-y-1.5 p-6">
                  <Skeleton className="h-6 w-48" />
                </div>
                <div className="p-6 pt-0">
                  <div style={{ minHeight: "301.957px" }}>
                    <Skeleton className="h-96 w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
