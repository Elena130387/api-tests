import {callRestApi, getRestBody} from "../api.controller";
import {executionsQuery} from "../../helper/urls";
import {startJobObj} from "../../requests/executions/startJob";

const {MAIN_URL, DEMO_URL} = process.env
const ESTIMATOR = '/estimator/executions'
export const EXECUTIONS_URL = process.env.TEST_ENV ? `${DEMO_URL}${ESTIMATOR}` : `${MAIN_URL}${ESTIMATOR}`

export const findJobExecutions = (limit: number, offset: number) => callRestApi(EXECUTIONS_URL, getRestBody('GET', null, executionsQuery(limit, offset)))
export const getJobExecutionsById = (shapeId: number) => callRestApi(`${EXECUTIONS_URL}/${shapeId}`, getRestBody('GET', null))
export const startJobExecution = (forceProcessing: boolean, shapeId: number) =>  callRestApi(EXECUTIONS_URL, getRestBody('POST', startJobObj(forceProcessing, shapeId)))
export const deleteJobExecution = ( shapeId: number) =>  callRestApi(EXECUTIONS_URL, getRestBody('DELETE', null, `?ids=${shapeId}`))
export const findRunningJob = () =>  callRestApi(`${EXECUTIONS_URL}/running`, getRestBody('GET', null))
