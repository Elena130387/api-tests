import { DATE } from "../date";

const { MAIN_URL, DEMO_URL } = process.env;
const URL = process.env.TEST_ENV
  ? `${DEMO_URL}/?showAside=true&amp;shape=`
  : `${MAIN_URL}/?showAside=true&amp;shape=`;
export const errorRgb = (sec: number, maxSec: number) =>
  sec > maxSec ? `#FF5630` : `#36b37e`;
export const rowForFirstTable = (obj: any, color: string) =>
  `<tr style=\"color: ${color}\">
        <td>
            <p>${DATE}</p>
        </td>
        <td>
            <p><a href=\"${URL + obj.Shapeid}\">${
    obj.name.split(".")[0]
  }, ${Math.round(obj.areaSize)}km2</a></p>
        </td>
        <td>
            <p>40</p>
        </td>
        <td>
            <p><span style=\"color: ${color}\">${
    obj.tiles_per_second_wo_preprocessing
  }</span></p>
        </td>
        <td>
            <p><span style=\"color:${color};\">${
    obj.ms_per_tile_wo_preprocessing
  }</span>
            </p>
        </td>
        <td>
            <p><span style=\"color: ${color};\">${
    obj.tiles_per_second
  }</span></p>
        </td>
        <td>
            <p><span style=\"color: ${color};\">${obj.ms_per_tile}</span></p>
        </td>
        <td>
            <p>Using precalculated data: <strong>${
              obj.preprocessing
            }</strong>.This report is generated automatically. ${Math.round(
    obj.areaSize
  )}km2 in ${obj.seconds}s</p>
        </td>
        <td>
            <p />
        </td>
  </tr>`;

export const rowForSecondTable = (obj: any) => `
    <tr>
        <td><p>${DATE}</p></td>
        <td><p>${obj.name}</p></td>
        <td><p>${Math.round(obj.speed)}</p></td>
        <td><p /></td>
    </tr>`;
export const updateFirstTable = (
  value: any,
  newRow: string,
  version: number
) => ({
  id: "121798682",
  type: "page",
  status: "current",
  title: "Scaling & Performance",
  macroRenderedOutput: {},
  body: {
    storage: {
      value:
        value.substr(0, value.indexOf("</tbody>")) +
        newRow +
        value.substr(value.indexOf("</tbody>")),
      representation: "storage",
      embeddedContent: [],
      _expandable: {
        content: "/rest/api/content/121798682",
      },
    },
    _expandable: {
      editor: "",
      atlas_doc_format: "",
      view: "",
      export_view: "",
      styled_view: "",
      dynamic: "",
      editor2: "",
      anonymous_export_view: "",
    },
  },
  extensions: {
    position: 417,
  },
  _expandable: {
    childTypes: "",
    container: "/rest/api/space/EXRO",
    metadata: "",
    operations: "",
    schedulePublishDate: "",
    children: "/rest/api/content/121798682/child",
    restrictions: "/rest/api/content/121798682/restriction/byOperation",
    history: "/rest/api/content/121798682/history",
    ancestors: "",
    version: "",
    descendants: "/rest/api/content/121798682/descendant",
    space: "/rest/api/space/EXRO",
  },
  _links: {
    editui: "/pages/resumedraft.action?draftId=121798682",
    webui: "/spaces/EXRO/pages/121798682",
    context: "/wiki",
    self: "https://syncretis.atlassian.net/wiki/rest/api/content/121798682",
    tinyui: "/x/GoBCBw",
    collection: "/rest/api/content",
    base: "https://syncretis.atlassian.net/wiki",
  },
  version: {
    number: ++version,
  },
});

export const updateSecondTable = (
  value: any,
  newRow: string,
  version: number
) => ({
  id: "121798682",
  type: "page",
  status: "current",
  title: "Scaling & Performance",
  macroRenderedOutput: {},
  body: {
    storage: {
      value:
        value.substr(
          0,
          value.indexOf("</tbody>", value.indexOf("</tbody>") + 1)
        ) +
        newRow +
        value.substr(value.indexOf("</tbody>", value.indexOf("</tbody>") + 1)),
      representation: "storage",
      embeddedContent: [],
      _expandable: {
        content: "/rest/api/content/121798682",
      },
    },
    _expandable: {
      editor: "",
      atlas_doc_format: "",
      view: "",
      export_view: "",
      styled_view: "",
      dynamic: "",
      editor2: "",
      anonymous_export_view: "",
    },
  },
  extensions: {
    position: 417,
  },
  _expandable: {
    childTypes: "",
    container: "/rest/api/space/EXRO",
    metadata: "",
    operations: "",
    schedulePublishDate: "",
    children: "/rest/api/content/121798682/child",
    restrictions: "/rest/api/content/121798682/restriction/byOperation",
    history: "/rest/api/content/121798682/history",
    ancestors: "",
    version: "",
    descendants: "/rest/api/content/121798682/descendant",
    space: "/rest/api/space/EXRO",
  },
  _links: {
    editui: "/pages/resumedraft.action?draftId=121798682",
    webui: "/spaces/EXRO/pages/121798682",
    context: "/wiki",
    self: "https://syncretis.atlassian.net/wiki/rest/api/content/121798682",
    tinyui: "/x/GoBCBw",
    collection: "/rest/api/content",
    base: "https://syncretis.atlassian.net/wiki",
  },
  version: {
    number: ++version,
  },
});
