"use client";

export function DashboardMockup() {
  return (
    <div className="w-full max-w-[640px] mx-auto">
      <div className="bg-white border border-border rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="h-11 bg-bg-alt border-b border-border flex items-center gap-2 px-4">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#d1d1d1]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#d1d1d1]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#d1d1d1]" />
          </div>
          <div className="flex-1 mx-4">
            <div className="h-5 bg-white border border-border rounded-md w-[55%]" />
          </div>
        </div>

        <div className="p-4 md:p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-3 bg-border rounded w-20" />
              <div className="h-5 bg-foreground/8 rounded w-32 mt-1.5" />
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-20 rounded-full bg-accent text-white text-[10px] font-semibold flex items-center justify-center">
                Panoramica
              </div>
              <div className="h-8 w-8 rounded-full bg-bg-alt border border-border" />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-1 p-2.5 rounded-xl bg-accent/5 border border-accent/10">
              <div className="h-2.5 bg-accent/15 rounded w-12" />
              <div className="h-5 bg-foreground/8 rounded w-3/4 mt-1.5" />
              <div className="h-2 bg-accent/10 rounded w-16 mt-1.5" />
            </div>
            <div className="col-span-1 p-2.5 rounded-xl bg-bg-alt border border-border">
              <div className="h-2.5 bg-border rounded w-12" />
              <div className="h-5 bg-foreground/8 rounded w-3/4 mt-1.5" />
              <div className="h-2 bg-border rounded w-16 mt-1.5" />
            </div>
            <div className="col-span-1 p-2.5 rounded-xl bg-bg-alt border border-border">
              <div className="h-2.5 bg-border rounded w-12" />
              <div className="h-5 bg-foreground/8 rounded w-3/4 mt-1.5" />
              <div className="h-2 bg-border rounded w-16 mt-1.5" />
            </div>
            <div className="col-span-1 p-2.5 rounded-xl bg-bg-alt border border-border">
              <div className="h-2.5 bg-border rounded w-12" />
              <div className="h-5 bg-foreground/8 rounded w-3/4 mt-1.5" />
              <div className="h-2 bg-border rounded w-16 mt-1.5" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 bg-bg-alt border border-border rounded-xl p-3">
              <div className="h-3 bg-border rounded w-16" />
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-md bg-accent/20" />
                  <div className="h-2.5 flex-1 bg-accent/10 rounded" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-md bg-accent/12" />
                  <div className="h-2.5 flex-1 bg-border rounded" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-md bg-foreground/6" />
                  <div className="h-2.5 flex-1 bg-border/40 rounded" />
                </div>
              </div>
            </div>
            <div className="col-span-1 bg-accent/5 border border-accent/10 rounded-xl p-3">
              <div className="h-3 bg-accent/15 rounded w-14" />
              <div className="mt-2.5">
                <div className="h-16 w-16 rounded-full border-2 border-accent/15 mx-auto flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-accent/12" />
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <div className="h-2 bg-accent/10 rounded w-12" />
                <div className="h-2 bg-accent/10 rounded w-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
