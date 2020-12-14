package web.mlpe_web.controller;

//import java.util.List;

import io.swagger.annotations.Api;
//import web.mlpe.model.GatewayLog;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import web.mlpe_web.dao.MLPEMapper;
//import web.mlpe.dao.GatewayLogMapper;
import web.mlpe_web.model.*;

@RestController
@Api(value = "mlpe_web controller v1")
public class MLPEController {
  @Autowired
  private MLPEMapper mlpeMapper;

  private static final long onedayMilli = 86400000L;

  @GetMapping("/api/{dv_id}")
  public Devices selectDeviceInformation(@PathVariable("dv_id") int dv_id) {
    Devices device = mlpeMapper.selectDeviceInformation(dv_id);

    return device;
  }

  @GetMapping("/api/sys/currentpower/{gt_id}")
  public CurrentPower selectCurrentPower(@PathVariable("gt_id") int gt_id) {
    CurrentPower cp = mlpeMapper.selectCurrentPower(gt_id);
    return cp;
  }

  @GetMapping("/api/sys/energytoday/{gt_id}/{time}")
  public Energy selectEnergyToday(
    @PathVariable("gt_id") int gt_id,
    @PathVariable("time") String time
  ) {
    long milli = Long.parseLong(time);
    // milli -= onedayMilli;
    DateFormat simple = new SimpleDateFormat("yyyy-MM-dd");
    Date date = new Date(milli);
    System.out.println(date);
    String t = simple.format(date);
    return mlpeMapper.selectEnergyToday(gt_id, t);
  }

  @GetMapping("/api/sys/energymonth/{gt_id}/{time}")
  public Energy selectEnergyMonth(
    @PathVariable("gt_id") int gt_id,
    @PathVariable("time") String time
  ) {
    long milli = Long.parseLong(time);
    // milli -= onedayMilli;
    DateFormat simple = new SimpleDateFormat("yyyy-MM-dd");
    Date date = new Date(milli);
    // System.out.println(date);
    String t = simple.format(date);
    return mlpeMapper.selectEnergyMonth(gt_id, t);
  }

  @GetMapping("/api/sys/energylifetime/{gt_id}")
  public Energy selectEnergyLifetime(@PathVariable("gt_id") int gt_id) {
    return mlpeMapper.selectEnergyLifetime(gt_id);
  }

  @GetMapping("/api/logical/{gt_id}/{time}/{range}")
  public List<Timeframe> selectTimeframes(
    @PathVariable("gt_id") int gt_id,
    @PathVariable("time") String time,
    @PathVariable("range") String range
  ) {
    List<Timeframe> result = null;
    String whichTable = "";
    String rangest = "", rangeend = "";
    long milli = Long.parseLong(time);
    DateFormat simple = new SimpleDateFormat("yyyy-MM-dd");
    Calendar cal = Calendar.getInstance();
    switch (range) {
      case "day":
        whichTable = "quarter";
        milli -= onedayMilli; // 받아온 날짜의 직전날
        cal.setTimeInMillis(milli);
        rangest = simple.format(cal.getTime()) + " 00:00:00.000000";
        rangeend = simple.format(cal.getTime()) + " 23:59:59.000000";
        break;
      case "week":
        whichTable = "hour";
        milli -= onedayMilli; // 받아온 날짜의 직전날
        cal.setTimeInMillis(milli);
        rangeend = simple.format(cal.getTime()) + " 23:59:59.000000";
        cal.add(Calendar.DATE, -6);
        rangest = simple.format(cal.getTime()) + " 00:00:00.000000";
        break;
      case "month":
        whichTable = "day";
        cal.setTimeInMillis(milli);
        cal.set(Calendar.DAY_OF_MONTH, 1);
        rangest = simple.format(cal.getTime()) + " 00:00:00.000000";
        cal.set(
          Calendar.DAY_OF_MONTH,
          cal.getActualMaximum(Calendar.DAY_OF_MONTH)
        );
        rangeend = simple.format(cal.getTime()) + " 23:59:59.000000";
        break;
      default:
        break;
    }
    System.out.println("from " + rangest + " to " + rangeend);
    result = mlpeMapper.selectTimeframes(gt_id, whichTable, rangest, rangeend);
    return result;
  }

  /*
   * @GetMapping("/api") public List<GatewayLog> selectGatewayLogList() { return
   * mlpeMapper.selectList(); }
   */

  /*
   * @GetMapping("/api/{gt_id}/string/{st_id}") public StringsLog
   * selectStringsLog(@PathVariable("gt_id") int gt_id, @PathVariable("st_id") int
   * st_id) { StringsLog stringslog = mlpeMapper.selectStringsLog(gt_id, st_id);
   * return stringslog; }
   */

  /*
   * @GetMapping("/api/logical/{gt_id}/string/{st_id}/{날짜}/{기준}") public
   * StringsLog selectStringsLog(@PathVariable("gt_id") int
   * gt_id, @PathVariable("st_id") int st_id) { switch({기준}) {
   *
   * } StringsLog stringslog = mlpeMapper.selectStringsLog(gt_id, st_id); return
   * stringslog; }
   */

  // @GetMapping("/api/{gt_id}/string/{st_id}/{endts}/{unit}")
  // public List<StringsLog_DateTotalwh>
  // selectStringLog_DateTotalwh(@PathVariable("gt_id") int gt_id,
  // @PathVariable("st_id") int st_id, @PathVariable("endts") String endts,
  // @PathVariable("unit") String unit)
  // throws java.text.ParseException {
  // List<StringsLog_DateTotalwh> stringslog = new ArrayList<>();
  // switch (unit) {
  // case "day":
  // long milli = Long.parseLong(endts);
  // System.out.println(milli);
  // DateFormat simple = new SimpleDateFormat("yyyy-MM-dd");
  // // DateFormat simple2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.000000");
  // /*
  // * OffsetDateTime now = OffsetDateTime.now(); ZoneOffset offset =
  // * now.getOffset(); int totalSeconds = offset.getTotalSeconds();
  // */
  // // Date result = simple.parse("2020-08-05");
  // Date result = new Date(milli);
  // // String startts = simple.format(result) + " 00:00:00.000000";
  // // String endts = simple.format(result) + " 23:59:59.000000";
  // // System.out.println(simple2.parse(startts) + " " + simple2.parse(endts));
  // System.out.println(result);
  // stringslog = mlpeMapper.selectStringsLog_DateTotalwh(gt_id, st_id, result);
  // break;
  // default:
  // break;
  // }
  // return stringslog;
  // }

  @GetMapping("/api/graph/gateway/{id}/{unit}")
  public List<GatewayLogWithUnit> selectGatewayGraphData(
    @PathVariable("id") int id,
    @PathVariable("unit") String unit
  ) {
    return mlpeMapper.selectGatewayLogWithUnit(id, unit);
  }

  @GetMapping("/api/graph/strings/{id}/{unit}")
  public List<StringsLogWithUnit> selectStringGraphData(
    @PathVariable("id") int id,
    @PathVariable("unit") String unit
  ) {
    return mlpeMapper.selectStringsLogWithUnit(id, unit);
  }

  @GetMapping("/api/graph/modules/{id}/{unit}")
  public List<ModulesLogWithUnit> selectModuleGraphData(
    @PathVariable("id") int id,
    @PathVariable("unit") String unit
  ) {
    return mlpeMapper.selectModulesLogWithUnit(id, unit);
  }
  // @GetMapping("/api/{gt_id}/{endTs}/{unit}")
  // public List<TotalLog_DateTotalwh>
  // selectTotalLog_DateTotalwh(@PathVariable("gt_id") int gt_id,
  // @PathVariable("endTs") String endTs, @PathVariable("unit") String unit)
  // throws java.text.ParseException {
  // List<TotalLog_DateTotalwh> totalLog = new ArrayList<>();
  // switch (unit) {
  // case "day":
  // long milli = Long.parseLong(endTs);
  // System.out.println(milli);
  // DateFormat simple = new SimpleDateFormat("yyyy-MM-dd");
  // Date result = new Date(milli);
  // System.out.println(result);
  // totalLog = mlpeMapper.selectTotalLog_DateTotalwh(gt_id, result);
  // System.out.println(totalLog);
  // break;
  // default:
  // break;
  // }
  // return totalLog;
  // }

  // @GetMapping("/api/module/{md_sn}/{endTs}/{unit}")
  // public List<ModuleLog_DateTotalwh>
  // selectModuleLog_DateTotalwh(@PathVariable("md_sn") int md_sn,
  // @PathVariable("endTs") String endTs, @PathVariable("unit") String unit)
  // throws java.text.ParseException {
  // List<ModuleLog_DateTotalwh> totalLog = new ArrayList<>();
  // switch (unit) {
  // case "day":
  // long milli = Long.parseLong(endTs);
  // System.out.println(milli);
  // DateFormat simple = new SimpleDateFormat("yyyy-MM-dd");
  // Date result = new Date(milli);
  // System.out.println(result);
  // totalLog = mlpeMapper.selectModuleLog_DateTotalwh(md_sn, result);
  // System.out.println(totalLog);
  // break;
  // default:
  // break;
  // }
  // return totalLog;
  // }

}
