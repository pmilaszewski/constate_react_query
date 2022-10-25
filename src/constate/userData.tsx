import {useState, useEffect} from 'react';
import constate from 'constate';
import {useMutation} from 'react-query';
import {pushData} from '../query/mutations';

const useDataContext = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const mutation = useMutation(() => pushData(name, age));
  const {isLoading, error, mutate} = mutation;

  useEffect(() => {
    error && console.warn(error);
  }, [error]);

  return {name, setName, age, setAge, isLoading, mutate};
};

export const [UserDataProvider, useUserData] = constate(useDataContext);
