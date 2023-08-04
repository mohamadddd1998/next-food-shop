import axios from "axios";
import { toast } from "react-toastify";

const RequestProfileInternalApi = async (
  url,
  body = {},
  setData,
  setLoading,
  setLinks,
  typeOfData
) => {
  try {
    setLoading(true);
    const response = await axios.post(url, body);
    if (response.data.success) {
      setData(response.data.data[typeOfData]);
      setLinks(response.data.data.meta.links);
    } else {
      toast.error("خطا سمت سرور");
    }
  } catch (error) {
    toast.error("خطا سمت کلاینت");
  } finally {
    setLoading(false);
  }
};
const RequestAuthInternalApi = async (
  url,
  body = {},
  setData,
  setLoading,
  setShow,
  router
) => {
  try {
    setLoading(true);
    const response = await axios.post(url, body);
    if (response.data.success) {
      setData(response.data.user);
      toast.success(response.data.message);
      setShow();
      router();
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    toast.error("خطا سمت کلاینت");
  } finally {
    setLoading(false);
  }
};
const RequestFilterProductsApi = async (
  url,
  setData,
  setLoading,
  setLinks,
  flag,
  filterParam,
  setCategoryActive,
  setSort,
  router
) => {
  let newUrl = new URL(window.location.href);
  let params = newUrl.searchParams;
  if (flag && params.has("page")) {
    params.delete("page");
  }
  if (filterParam) {
    const keyNames = Object.keys(filterParam);
    params.set(keyNames[0], filterParam[keyNames[0]]);
  }
  if (params.has("category")) {
    setCategoryActive(params.get("category"));
  }
  if (params.has("sortBy")) {
    setSort(params.get("sortBy"));
  }
  try {
    setLoading(true);
    const response = await axios.get(url + params.toString());
    setData(response.data.data.products);
    setLinks(response.data.data.meta.links.slice(1, -1));
  } catch (error) {
    toast.error("خطا  در دریافت اطلاعات");
  } finally {
    setLoading(false);
    router(params.toString());
  }
};
const GeneralRequestApi = async (url, body = {}, setLoading, setData) => {
  try {
    setLoading(true);
    const response = await axios.post(url, body);
    if (response.data.status == "success") {
      setData(response.data.data);
      toast.success("با موفقیت ثبت شد");
    } else {
      toast.error(response.data.message || "خطا در درخواست");
    }
  } catch (error) {
    toast.error("خطا  در ارسال اطلاعات");
  } finally {
    setLoading(false);
  }
};
export {
  RequestAuthInternalApi,
  RequestProfileInternalApi,
  RequestFilterProductsApi,
  GeneralRequestApi,
};
