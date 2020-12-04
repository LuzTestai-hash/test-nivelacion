import axios from 'axios';
import config from '../config';

export function getInformationTable() {
  return axios.get(config.API_URL);
}

export function getInformationComments() {
  return axios.get(config.API_COMMENTS_URL);
}