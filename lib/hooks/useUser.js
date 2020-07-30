import { useEffect } from 'react';
import Router from 'next/router';
import useSWR from 'swr';
import {CONSTANTS} from "../../shared/Constants";
import Cookies from 'js-cookie';



export function useUser({ redirectTo, redirectIfFound } = {}) {
    const cookie = Cookies.get("fimedtk");
    //console.log(`Cookie: ${cookie}`)
    const { data, error } = useSWR(`${CONSTANTS.API.url}/api/v2/auth/user/me`, (url) =>
      fetch(url, {method: "GET", headers: {"Authorization": `Bearer ${cookie}` }})
        .then((data) => data.json())
    )

    //console.log(`data: ${data}`)
    const user = data?.username
    //console.log(`user: ${user}`)
    const finished = Boolean(data)
    const hasUser = Boolean(user)

    useEffect(() => {
        if (!redirectTo || !finished) return
        if (
          // If redirectTo is set, redirect if the user was not found.
          (redirectTo && !redirectIfFound && !hasUser) ||
          // If redirectIfFound is also set, redirect if the user was found
          (redirectIfFound && hasUser)
        ) {
          Cookies.remove("fimedtk")
          Router.push(redirectTo)
        }
      }, [redirectTo, redirectIfFound, finished, hasUser])
    
      return error ? null : user
}