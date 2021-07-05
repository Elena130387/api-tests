import {callRestApi, getRestBody} from "../api.controller";
import {executionsQuery} from "../../helper/urls";
import {startJobObj} from "../../requests/executions/startJob";

const {MAIN_URL} = process.env
const EXECUTIONS_URL = `${MAIN_URL}/estimator/executions`

export const findJobExecutions = (limit: number, offset: number) => callRestApi(EXECUTIONS_URL, getRestBody('GET', null, executionsQuery(limit, offset)))
export const getJobExecutionsById = (shapeId: number) => callRestApi(`${EXECUTIONS_URL}/${shapeId}`, getRestBody('GET', null))
export const startJobExecution = (forceProcessing: boolean, shapeId: number) =>  callRestApi(EXECUTIONS_URL, getRestBody('POST', startJobObj(forceProcessing, shapeId)))
