/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
//
import api from "../../../api";
import strings from "../../../config/localization/strings";
import { CrewData, Pagination } from "../../../types";
import { GetCrewRequest, CrewDutyTypes } from "../../../api/crew/getCrew";
import TeamMemberItem from "./TeamMemberItem";

type TeamMembersProps = {};

function TeamMembers({}: TeamMembersProps) {
  const {
    data: getCrewData,
    loading: getCrewLoading,
    query: getCrewQuery,
    error: getCrewError,
  } = api.crew.getCrew();

  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [crewList, setCrewList] = useState<CrewData[]>([]);
  const [crewPagination, setCrewPagination] = useState<Pagination | null>(null);
  const [selectedCrewDuty, setSelectedCrewDuty] = useState<
    CrewDutyTypes.tactic | CrewDutyTypes.trim | CrewDutyTypes.helmsman | "all"
  >("all");

  const fetchCrew = useCallback((options: GetCrewRequest) => {
    getCrewQuery({
      data: options,
      urlEncoded: true,
    });
  }, []);

  useEffect(() => {
    if (getCrewData && !getCrewError) {
      if (loadMore) {
        let tempList: CrewData[] = [];
        tempList = [...crewList, ...getCrewData.data.data];
        setCrewList(tempList);
        setLoadMore(false);
      } else {
        setCrewList(getCrewData.data.data);
      }
      setCrewPagination(getCrewData.data.meta.pagination);
    }
  }, [getCrewData, getCrewError]);

  useEffect(() => {
    fetchCrew({
      page: 1,
      limit: 5,
      ...(selectedCrewDuty !== "all" && { duty: selectedCrewDuty }),
    });
  }, [selectedCrewDuty, fetchCrew]);

  const loadMoreOnClick = useCallback(() => {
    if (crewPagination) {
      setLoadMore(true);
      let nextPage = crewPagination.current_page + 1;
      if (nextPage <= crewPagination.total_pages) {
        fetchCrew({
          page: nextPage,
          limit: 5,
        });
      }
    }
  }, [crewPagination, fetchCrew]);

  const showAllCrewOnClick = useCallback(() => {
    setLoadMore(false);
    setSelectedCrewDuty("all");
  }, []);

  const showTrimCrewOnClick = useCallback(() => {
    setLoadMore(false);
    setSelectedCrewDuty(CrewDutyTypes.trim);
  }, []);

  const showTacticCrewOnClick = useCallback(() => {
    setLoadMore(false);
    setSelectedCrewDuty(CrewDutyTypes.tactic);
  }, []);

  const showHelmsmanCrewOnClick = useCallback(() => {
    setLoadMore(false);
    setSelectedCrewDuty(CrewDutyTypes.helmsman);
  }, []);

  return (
    <div className="team-members-container">
      <h3 className="team-members_title">
        {strings.screen.home.teamMembers.title}
      </h3>
      <h4 className="team-members_subtitle">
        {strings.screen.home.teamMembers.subtitle}
      </h4>

      <div className="team-members_filters">
        <button
          className={`team-members_filters-item ${
            selectedCrewDuty === "all" ? "active" : ""
          }`}
          disabled={getCrewLoading}
          onClick={showAllCrewOnClick}
        >
          {strings.screen.home.teamMembers.filter.all}
        </button>
        <button
          className={`team-members_filters-item ${
            selectedCrewDuty === CrewDutyTypes.trim ? "active" : ""
          }`}
          disabled={getCrewLoading}
          onClick={showTrimCrewOnClick}
        >
          {strings.screen.home.teamMembers.filter.trim}
        </button>
        <button
          className={`team-members_filters-item ${
            selectedCrewDuty === CrewDutyTypes.tactic ? "active" : ""
          }`}
          disabled={getCrewLoading}
          onClick={showTacticCrewOnClick}
        >
          {strings.screen.home.teamMembers.filter.tactic}
        </button>
        <button
          className={`team-members_filters-item ${
            selectedCrewDuty === CrewDutyTypes.helmsman ? "active" : ""
          }`}
          disabled={getCrewLoading}
          onClick={showHelmsmanCrewOnClick}
        >
          {strings.screen.home.teamMembers.filter.helmsman}
        </button>
      </div>

      <div className="team-members_images">
        {crewList.map((crew) => (
          <div
            className="team-members_images-item"
            key={`${crew.name}-${crew.duties}`}
          >
            <TeamMemberItem alt="" src={crew.image} {...crew} />
          </div>
        ))}
      </div>

      <div className="team-members_actions">
        <button
          className={`team-members_actions-item`}
          disabled={getCrewLoading}
          onClick={loadMoreOnClick}
        >
          {strings.screen.home.teamMembers.filter.loadMore}
        </button>
      </div>
    </div>
  );
}

export default TeamMembers;
