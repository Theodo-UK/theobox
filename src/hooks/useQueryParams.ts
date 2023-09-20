import { TheoboxQueryParams } from "@/app/types";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlSearchParams = new URLSearchParams(searchParams?.toString());
  const searchParamsObj: TheoboxQueryParams = Object.fromEntries(
    searchParams.entries()
  );

  const setQueryParams = (params: Partial<TheoboxQueryParams>) => {
    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        urlSearchParams.delete(key);
      } else {
        urlSearchParams.set(key, String(value));
      }
    });

    const search = urlSearchParams.toString();
    const query = search ? `?${search}` : "";

    router.replace(`${pathname}${query}`);
  };

  return {
    queryParams: searchParamsObj,
    setQueryParams,
  };
}
