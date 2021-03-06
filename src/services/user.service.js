import { useCallback, useState } from "react";
import { useAuth } from "../providers/auth.provider";
import config from "../config";
import axios from "axios";

const useUser = (user_id) => {

  const { token } = useAuth();

  const [user, setUser ] = useState(null);
  const [isLoading, setIsLoading ] = useState(true);
  const [isError, setIsError ] = useState(false);

  const fetchUser = useCallback(async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const res = await axios({
        method: "GET",
        url: config.api_url + 'users/' + user_id,
        headers: config.headers(token)
      });

      setUser(res.data);
      setIsLoading(false);
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
    }
  }, [token]);

  return { user, isLoading, isError, fetchUser };
}

const useUsers = () => {

  const { token } = useAuth();

  const [users, setUsers ] = useState(null);
  const [isLoading, setIsLoading ] = useState(true);
  const [isError, setIsError ] = useState(false);

  const fetchUsers = useCallback(async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const res = await axios({
        method: "GET",
        url: config.api_url + 'users',
        headers: config.headers(token)
      });

      setUsers(res.data);
      setIsLoading(false);
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
    }
  }, [token]);

  return { users, isLoading, isError, fetchUsers };
}

export { useUser, useUsers };