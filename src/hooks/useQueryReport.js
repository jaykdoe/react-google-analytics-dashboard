import { useAuthContext } from "../context/AuthContext";
import { format } from "date-fns";
import { useCallback } from "react";

export function useQueryReport() {
  const { token } = useAuthContext();

  const requestDimensions = (dimensions) => {
    let result = [];
    dimensions.forEach((item) => {
      result.push({
        name: item,
      });
    });
    return result;
  };

  const fetchData = useCallback(
    async (props) => {
      const {
        viewID,
        startDate,
        endDate,
        metrics,
        dimensions,
        orderBy,
        //filter,
      } = props;
      const resp = await fetch(
        // "https://analyticsreporting.googleapis.com/v4/reports:batchGet"
        //"https://analyticsdata.googleapis.com/v1beta/properties/" + viewID + ":batchRunReports",
        //"https://analyticsdata.googleapis.com/v1beta/" + viewID + ":runReport",
        "https://analyticsdata.googleapis.com/v1beta/properties/" + viewID + ":batchRunReports",
        {
          method: "POST",
          mode: 'no-cors',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            requests: [
              {
                property: viewID,
                // filtersExpression: filter,
                dateRanges: [
                  {
                    startDate: format(new Date(startDate), "yyyy-MM-dd"),
                    endDate: format(new Date(endDate), "yyyy-MM-dd"),
                  },
                ],
                metrics: [
                  {
                    expression: metrics,
                  },
                ],
                dimensions: requestDimensions(dimensions),
                orderBys: orderBy
                  ? [
                      {
                        fieldName: orderBy.fieldName,
                        sortOrder: orderBy.order,
                      },
                    ]
                  : [],
              },
            ],
          }),
        }
      );
      const data = await resp.json();

      if (data.error) {
        return data.error;
      }

      return data;
    },
    [token]
  );

  return { fetchData };
}
