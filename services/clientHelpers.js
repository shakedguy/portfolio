import {
  IoHomeOutline,
  IoPersonOutline,
  IoInformationSharp,
} from 'react-icons/io5';
import { VscSourceControl } from 'react-icons/vsc';
import { MdWorkOutline } from 'react-icons/md';
import { HiOutlineAcademicCap } from 'react-icons/hi';

export const getIcon = (title) => {
  let icon = null;
  switch (title) {
    case 'Home':
      icon = IoHomeOutline;
      break;
    case 'About':
      icon = IoPersonOutline;
      break;
    case 'Experience':
      icon = MdWorkOutline;
      break;
    case 'Education & Skills':
      icon = HiOutlineAcademicCap;
      break;
    case 'My work':
      icon = VscSourceControl;
      break;
    case 'Contact':
      icon = IoInformationSharp;
      break;

    default:
      break;
  }
  return icon;
};

export const getUrl = (title) => {
  let result = null;

  switch (title) {
    case 'c':
      result = 'csharp';
      break;
    default:
      result = title;
      break;
  }
  return result;
};

export const fetcher = async (...args) => {
  const response = await fetch(...args);
  return await response.json();
};

export const getData = async (fileName) => {
  const response = await fetch(`/api/${fileName}`);
  const data = await response.json();
  return data;
};
