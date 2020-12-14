package web.mlpe_web.dao;

//import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
//import web.mlpe.model.GatewayLog;
import web.mlpe_web.model.*;

@Mapper
@Repository
public interface MLPEMapper {
    // List<GatewayLog> selectList();

    List<Timeframe> selectTimeframes(int gt_id, String unit, String rangest, String rangeend);

    Devices selectDeviceInformation(int dv_id);

    StringsLog selectStringsLog(int gt_id, int st_id);

    List<StringsLog_DateTotalwh> selectStringsLog_DateTotalwh(int gt_id, int st_id, Date date);

    // List<TotalLog_DateTotalwh> selectTotalLog_DateTotalwh(int gt_id, Date date);

    // List<ModuleLog_DateTotalwh> selectModuleLog_DateTotalwh(int md_sn, Date
    // date);

    List<GatewayLogWithUnit> selectGatewayLogWithUnit(int gt_id, String unit);

    List<StringsLogWithUnit> selectStringsLogWithUnit(int st_id, String unit);

    List<ModulesLogWithUnit> selectModulesLogWithUnit(int md_sn, String unit);

    CurrentPower selectCurrentPower(int gt_id);

    Energy selectEnergyToday(int gt_id, String time);

    Energy selectEnergyMonth(int gt_id, String time);

    Energy selectEnergyLifetime(int gt_id);

}