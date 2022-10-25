import {useState, useEffect} from 'react';
import constate from 'constate';
import {useQuery} from 'react-query';
import {getData} from '../query/queries';

type TListObject = {
  name: string;
  age: string;
};

const useListContext = () => {
  const [list, setList] = useState<TListObject[]>([]);
  const query = useQuery('dataUID', getData);
  const refetch = async () => await query.refetch();
  const {data, isLoading, error} = query;

  useEffect(() => {
    data && setList([...data]);
  }, [data]);

  useEffect(() => {
    error && console.warn(error);
  }, [error]);

  return {list, isLoading, refetch};
};

export const [ListProvider, useList] = constate(useListContext);
