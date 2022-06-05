import useFetch from "../../hooks/useFetch";
import { CrewAPIResponse } from "../../types";

export interface GetCrewRequest {
  page: number;
  limit: number;
  duty?: CrewDutyTypes.tactic | CrewDutyTypes.trim | CrewDutyTypes.helmsman;
}

export enum CrewDutyTypes {
  tactic = "tactic",
  trim = "trim",
  helmsman = "helmsman",
}

function GetCrew() {
  const {
    data,
    loading,
    getData: query,
    error,
    resetError,
  } = useFetch<GetCrewRequest, CrewAPIResponse>(`/api.php`);
  return { data, loading, query, error, resetError };
}

export default GetCrew;
