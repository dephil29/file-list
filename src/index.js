import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import './index.css';
import Time from "./time.js"

const testFiles = [
  {
    id: 1,
    name: "src",
    type: "folder",
    updated_at: "2017-09-10 21:24:00",
    latestCommit: {
      message: "Initial commit"
    }
  },
  {
    id: 2,
    name: "tests",
    type: "folder",
    updated_at: "2017-09-14 21:24:00",
    latestCommit: {
      message: "Added new thing"
    }
  },
  {
    id: 3,
    name: "README",
    type: "FILE",
    updated_at: "2017-09-18 21:24:00",
    latestCommit: {
      message: "Added a readme"
    }
  }
];

function FileName({file}){
  return <span>{file.name}</span>
}

const CommitMessage = ({commit}) => <td className="commit-message">{commit.
  message}</td>;

function FileIcon({file}){
  let icon = "fa-file-text-o";
  if (file.type == "folder"){
    icon = "fa-folder";
  }

  return(
    <td className="file-icon">
      <i className={`fa ${icon}`} />
    </td>
  );
}

FileIcon.propTypes = {
  file: PropTypes.object.isRequired
}

// function getFileName(file){
//   return [
//     <FileIcon file={file} key={0} />,
//     <td className="file-name" key={1}>
//       {file.name}
//     </td>
//   ];
// }

const FileListItem = ({file}) => (
  <tr className="file-list-item">
    <td className="file-icon">
      <FileIcon file={file} />
    </td>
    <td className="file-name">
      <FileName file={file} />
    </td>
    <CommitMessage commit={file.latestCommit} />
    <td className="age">
      <Time time={file.updated_at} />
    </td>
  </tr>
);

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};

const FileList = ({files}) => (
  <table className="file-list">
    <tbody>{files.map(file => (
        <FileListItem key={file.id} file={file} />
      ))}
    </tbody>
  </table>
)

FileList.propTypes = {
  files: PropTypes.array.isRequired
}

ReactDOM.render(<FileList files={testFiles} />, document.getElementById('root'));
