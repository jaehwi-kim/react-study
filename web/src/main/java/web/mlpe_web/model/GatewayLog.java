package web.mlpe_web.model;

import java.sql.Timestamp;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class GatewayLog {
    private int gt_id;
    private Timestamp startTs;
    private Timestamp endTs;
    private String mac_fix;
    private String sn_fix;
    private String software_version_fix;
    private char ioboard_fix;
}