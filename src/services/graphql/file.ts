import { gql } from '@apollo/client';

export const CREATE_FILE_MUTATION = gql`
  mutation CreateFile($createFileInput: CreateFileInput!) {
    createFile(createFileInput: $createFileInput) {
      size
      name
      file
    }
  }
`;

export const FIND_ALL_FILES_QUERY = gql`
  query {
    findAll {
      id
      name
      size
      createdAt
      updatedAt
    }
  }
`;

export const FIND_ONE_FILE_QUERY = (id: string | string[]) => gql`
  query {
    findOne(id: ${id}) {
      id
      name
      size
      file
      createdAt
    }
  }
`;
