import { createReport } from "../controller/confluence/confluence-controller";
import { getShapeById } from "../controller/shape/shape-controller";
import { DATE } from "./date";

export const rowToTable = (obj: any) =>
  `<tr><td><p>${DATE}</p></td><td><p><a href=\"https://exro-dev.syncretis.com/?showAside=true&amp;shape=${
    obj.Shapeid
  }\">${obj.geoInfo}, ${Math.round(
    obj.areaSize
  )}km2</a></p></td><td><p>N/A</p></td><td><p><span style=\"color: rgb(54,179,126);\">${
    obj.tiles_per_second_wo_preprocessing
  }</span></p></td><td><p><span style=\"color: rgb(54,179,126);\">${
    obj.ms_per_tile_wo_preprocessing
  }</span></p></td><td><p><span style=\"color: rgb(54,179,126);\">${
    obj.tiles_per_second
  }</span></p></td><td><p><span style=\"color: rgb(54,179,126);\">${
    obj.ms_per_tile
  }</span></p></td><td><p>Using precalculated data: <strong>${
    obj.preprocessing
  }</strong>. This report is generated automatically. ${Math.round(
    obj.areaSize
  )}km2 in ${obj.seconds}s</p></td><td><p /></td></tr>`;
export const updatePage = (value: any, newRow: string, version: number) => ({
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
