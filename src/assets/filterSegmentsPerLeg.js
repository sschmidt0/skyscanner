export const filterSegmentsPerLeg = (leg, segments) => {
  // filter for segments ids
  const segmentIds = leg.SegmentIds;
  // connect segmentsIds with segments object
  if (Object.entries(segments).length !== 0 ) {
    return segmentIds.map(elementId => segments.filter(elementObj => elementObj.Id === elementId));
  }
  return [];
};
